<?php

namespace Common\Auth;

trait FormatsPermissions
{

    /**
     * Encode permissions into json string.
     *
     * @param array|string $value
     */
    public function setPermissionsAttribute($value)
    {
        if (!$value) {
            $this->attributes['permissions'] = null;
            return;
        }

        if (!is_array($value)) {
            $value = json_decode($value, true);
        }

        $permissions = array_map(function ($permissionValue) {
            return $permissionValue ? 1 : 0;
        }, $value);

        $this->attributes['permissions'] = json_encode($permissions);
    }

    /**
     * Return decoded permissions.
     *
     * @param string $value
     * @return array
     */
    public function getPermissionsAttribute($value)
    {
        if (!$value) return [];

        $permissions = json_decode($value, true) ?: [];

        $permissions = array_map(function ($permissionValue) {
            return $permissionValue ? 1 : 0;
        }, $permissions);

        return $permissions;
    }
    // public function setCategoryPermission($value)
    // {
    //     $this->attributes['category_permission'] = json_encode($value);
    // }
    // public function setArticlePermission($value)
    // {
    //     $this->attributes['article_permission'] = json_encode($value);
    // }
}
