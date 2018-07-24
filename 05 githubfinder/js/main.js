$(document).ready(function () {
	console.log("Ready here");
	$("#searchUser").on('keyup',function(e){
		let username = e.target.value;

		// make request to github api.
		$.ajax({
			url:"https://api.github.com/users/"+username,
			data:{
				client_id:'your client id key of github ',
				client_secret:'your client secret key of github'
			}
		}).done(function(user){
			$.ajax({
				url:"https://api.github.com/users/"+username+"/repos",
				data:{
					client_id:'your client id key of github ',
					client_secret:'your client secret key of github',
					sort:'craeted: asc',
					per_page: 5
				}
			}).done(function(repos){
				$.each(repos ,function (index,repo) {
					$('#repos').append(`
						<div class="well">
							<div class="row mt-2 mb-2">
								<div class="col-md-7">
									<strong>${repo.name}</strong>: ${repo.description}
								</div>
								<div class="col-md-3">
									<span class="badge badge-primary h3">Public repos ${repo.forks_count}</span>
									<span class="badge badge-success h3">Public gists ${repo.watchers_count}</span>
									<span class="badge badge-secondary h3">Followers ${repo.stargazers_count}</span>
								</div>
								<div class="col-md-2">
									<a href="${repo.html_url}" target="_blank" class="btn btn-primary">Repo Page</a>
								</div>
							</div>
						</div>
					`);
				});
			});
			$("#profile").html(`
				<div class="row">
					<div class="col-md-4">
						<div class="card" style="width: 18rem;">
						  <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
						  <div class="card-body text-center">
						  	<h3 class="card-title">${user.name}</h3>
						    <a href="${user.html_url}" target="_blank" class="btn btn-primary">Visit profile</a>
						  </div>
						</div>
					</div>
					<div class="col-md-8 ">
						<span class="badge badge-primary h3">Public repos ${user.public_repos}</span>
						<span class="badge badge-success h3">Public gists ${user.public_gists}</span>
						<span class="badge badge-secondary h3">Followers ${user.followers}</span>
						<span class="badge badge-danger h3">Following ${user.following}</span>
						<br><br>
						<ul class = "list-group">
							<li class="list-group-item">
								<div class="row">
									<div class="col-md-4">Company:</div>
									<div class="col-md-8">${user.company}</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<div class="col-md-4">Website/blog: </div>
									<div class="col-md-8">${user.blog}</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<div class="col-md-4">Location: </div>
									<div class="col-md-8">${user.location}</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<div class="col-md-4">Member Since: </div>
									<div class="col-md-8">${user.created_at}</div>
								</div>
							</li>
							<li class="list-group-item">
								<div class="row">
									<div class="col-md-4">Last Activity: </div>
									<div class="col-md-8">${user.updated_at}</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<h2 class="header text-center">Repos</h2>
				<br>
				<hr>
				<div id="repos"></div>
			`);
		});
	})
});