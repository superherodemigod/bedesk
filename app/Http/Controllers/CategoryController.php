<?php

namespace App\Http\Controllers;

use App\Http\Requests\ModifyCategories;
use App\User;
use Auth;
use App\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Common\Core\Controller;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @var Category
	 */
	private $category;

	/**
	 * @var User|null
	 */
	private $user;

	/**
	 * @param Request $request
	 * @param Category $category
	 */
	public function __construct(Request $request, Category $category)
	{
		$this->request  = $request;
		$this->category = $category;
		$this->user     = Auth::user();
	}

	/**
	 * Return all help center categories current user has access to.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function index()
	{
		$this->authorize('index', Category::class);

		$permissions =  auth()->user()->permissions;
		$user_permissions = array();
		$category_names = array();
		$article_names = array();
		foreach ($permissions as $key => $item) {
			array_push($user_permissions, $key);
		}
		for ($i = 0; $i < count($user_permissions); $i++) {
			$permission = $user_permissions[$i];
			if (strpos($permission, 'category:') !== false) {
				$temp = explode(':', $permission);
				array_push($category_names, $temp[1]);
			}
			if (strpos($permission, 'article:') !== false) {
				$temp = explode(':', $permission);
				array_push($article_names, $temp[1]);
			}
		}


		$query = $this->category->rootOnly()
			->withCount('articles')
			->with(['children' => function ($query) {
				$query->withCount('articles');
			}])
			->orderByPosition();

		if ($search = $this->request->get('query')) {
			$query->where('name', 'like', "%$search%");
		}

		if ($limit = $this->request->get('limit')) {
			$query->limit($limit);
		}

		$categories = $query->get();

		return $this->success(['categories' => $categories]);
	}

	/**
	 * @param int $id
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function show($id)
	{
		$this->authorize('show', Category::class);

		$category = $this->category->with('children', 'parent.children')->findOrFail($id);

		return $this->success(['category' => $category]);
	}

	/**
	 * Create new help center category.
	 *
	 * @param ModifyCategories $request
	 * @return Response
	 */
	public function store(ModifyCategories $request)
	{
		$this->authorize('store', Category::class);

		$last = $this->category->orderBy('position', 'desc')->first();

		$category = $this->category->create([
			'name'        => $this->request->get('name'),
			'description' => $this->request->get('description'),
			'parent_id'   => $this->request->get('parent_id', null),
			'position'    => $last ? $last->position + 1 : 1,
		]);

		return response($category, 201);
	}

	/**
	 * Update specified help center category.
	 *
	 * @param integer $id
	 * @param ModifyCategories $request
	 *
	 * @return Category
	 */
	public function update($id, ModifyCategories $request)
	{
		$this->authorize('update', Category::class);

		$category = $this->category->findOrFail($id);

		$category->fill($this->request->all())->save();

		return $category;
	}

	/**
	 * Delete specified help center category and detach all folders attached to it.
	 *
	 * @param integer $id
	 * @return JsonResponse
	 */
	public function destroy($id)
	{
		$this->authorize('destroy', Category::class);

		$category = $this->category->findOrFail($id);

		$category->where('parent_id', $category->id)->update(['parent_id' => null]);
		$category->delete();

		return $this->success(['data' => $category->id], 204);
	}
}
