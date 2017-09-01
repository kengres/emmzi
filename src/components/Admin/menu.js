export default [
  { 'header': 'Admin Panel' },
  { 'href': '/admin', 'title': 'Home', 'icon': 'home' },
  { 'href': '/admin/crud/types', 'title': 'Types', 'icon': 'view_list' },
  { 'href': '/admin/crud/posts', 'title': 'Posts', 'icon': 'view_list' },
  { 'href': '/admin/crud/posts/create', 'title': 'Create Post', 'icon': 'note_add' },

  { 'href': '/admin/crud/users', 'title': 'Users', 'icon': 'people' },

  {
    'title': 'Pages',
    'icon': 'domain',
    'items': [
      { 'href': '/admin/example', 'title': 'Example' },
      { 'href': '/admin/about', 'title': 'About' }
    ]
  },
  { divider: true },
  { 'header': 'System' },
  { 'href': '/admin/settings', 'title': 'Settings', 'icon': 'settings' },

  { 'href': '/admin/login', 'icon': 'lock', 'title': 'Logout' }
]
