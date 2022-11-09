
# Sample "Todo" App

Classical "todo" sample app with directories. As a user, you create directory, create todo item in it, mark it as done/not done. Remove directory with items/directories inside. List directories, list todo items with pagination by directory and/or status.

* Create, list directories.
* Remove directory with all items inside or sub directories & items inside.
* Create new todo item with some title and status of not done inside root or inner directory. Can be max 1 level of directory. Root -> Some dir 1 Task may be added to Root or one of the children dir.
* Update single item: mark as done, mark as not done, move to different directory.
* List directories, can fetch all at once
* List done items in directory. Paginate 5 at a time.
* List not done items in directory. Paginate 5 at a time.
* List all items in directory. Paginate 5 at a time.
* Order items by date when it was created

API design:

* All endpoints should use POST http method
* All api is REST JSON api
* Endpoints:

* /directory/list
* /directory/create
* /directory/remove
* /todo-item/create
* /todo-item/mark-as-done
* /todo-item/mark-as-not-done
* /todo-item/move-to-directory
* /todo-item/list 
