export function fetchAllPosts(){
    return function(dispatch){
        var url = 'https://jsonplaceholder.typicode.com/posts';
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
        		dispatch({
					type : "POSTS",
					payload : resp
				})
			}
		}
        xhttp.open("GET", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(null)
    }
}

export function editPostsById(data){
    return function(dispatch){
        var body = JSON.stringify({
            title: data.title,
            body: data.body,
            userId: data.userId
        })
        var url = 'https://jsonplaceholder.typicode.com/posts/'+data.id;
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
                dispatch({
					type : "EDIT",
					payload : resp
				})
			}
		}
        xhttp.open("PATCH", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(body)
    }
}


export function deletePostsById(data){
    return function(dispatch){
        var body = JSON.stringify({
            title: data.title,
            body: data.body,
            userId: data.userId
        })
        var url = 'https://jsonplaceholder.typicode.com/posts/'+data.id;
        var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState === 4 && xhttp.status === 200){
                var resp = JSON.parse(xhttp.responseText);
        		dispatch({
					type : "DELETE",
					payload : resp
				})
			}
		}
        xhttp.open("DELETE", url, true)
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("cache-control", "no-cache");
        xhttp.send(body)
    }
}