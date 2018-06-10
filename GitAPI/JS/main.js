$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		//console.log(e.target.value);
		let username=e.target.value;
		//Ajax request
		$.ajax({
			url:'https://api.github.com/users/'+username,
			data:{
				client_id:'3ae37b2740a1b7bb9872',
				client_secret:'f43dd17525343128f068e1e35aca75d4e8cb6917'
			}
		}).done(function(user){
			$.ajax({
				url:'https://api.github.com/users/'+username+'/repos',
				data:{
				client_id:'3ae37b2740a1b7bb9872',
				client_secret:'f43dd17525343128f068e1e35aca75d4e8cb6917',
				sort:'created: asc'

			}
			}).done(function(repos){
				$.each(repos,function(index, repo){
					$('#repos').append(`
							<div class="well">
								<div class="row">
									<div class="col-md-7">
										<strong>${repo.name}</strong>:${repo.description}
									</div>
									
									<div class="col-md-3">
										<span class="label label-primary">Forks: ${repos.forks_count}</span>
										<span class="label label-success">Watchers: ${repo.watchers_count}</span>
										<span class="label label-info">Stars: ${repo.stargazers_count}</span> 
									</div>
									
									<div class="col-md-2">
										<a  target="_blank" href="${repo.html_url}" class="btn btn-primary btn-block">Repo Page</a>
									</div>
								</div>
							</div>




						`);
				}); 
			});
			$('#profile').html(`
					<div class="panel panel-default">
					  <div class="panel-heading">
					    <h3 class="panel-title">${user.name}</h3>
					  </div>
					  <div class="panel-body">
						<div class="row">
							<div class="col-md-3">
								<img class="thumbnail" src="${user.avatar_url}">
								<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
							</div>

							<div class="col-md-9">
								<span class="label label-primary">public_repos: ${user.public_repos}</span>
								<span class="label label-success">public_gists: ${user.public_gists}</span>
								<span class="label label-info">followers: ${user.followers}</span>  								  
							    <span class="label label-warning">following: ${user.following}</span>
								<br><br>
									<ul class="list-group">
										<li class="list-group-item">Bio: ${user.bio}</li>
										<li class="list-group-item">Location: ${user.location}</li>
										<li class="list-group-item">Company: ${user.company}</li>
										<li class="list-group-item">Email: ${user.email}</li>
									</ul>

							</div>
						</div>
					  </div>
					</div>
					<h3 class="page-header">All Repository</h3>
					<div id="repos"></div>

				`);
		});


	});
});