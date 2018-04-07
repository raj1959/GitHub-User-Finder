class Interface {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  displayProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class='row'>
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-secondary btn-block mb-3">View GitHub Profile</a>
          </div>
          <div class="col-md-9">
            <div class="badges d-flex flex-row flex-wrap justify-content-between align-items-center mb-4">
            <span class="badge-primary p-2">Public Repos: ${user.public_repos}</span>
            <span class="badge-secondary p-2">Public Gists: ${user.public_gists}</span>
            <span class="badge-followers p-2">Followers: ${user.followers}</span>
            <span class="badge-info p-2">Public Following: ${user.following}
            </span>
            </div>
            
            <ul class="list-group d-block" style="font-size:18px;">
              <li class="list-group-item text-light">Company: ${!user.company?'No info provided':user.company}</li>
              <li class="list-group-item text-light">Website: ${user.blog}</li>
              <li class="list-group-item text-light">Location: ${user.location}</li>
              <li class="list-group-item text-light">Member since: ${user.created_at.substring(0,10)}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Most recent 6 repositories:</h3>
      <div id="repos"></div>
    `;
  }

  showRepositories(repositories) {
    let output = '';
    repositories.forEach(function (repo) {
      output += `
        <div class ="card card-body mb-2" style="font-size:18px;">
          <div class="row">
            <div class="col-md-6 d-flex align-items-center">
              <a href="${repo.html_url}" target="_blank" class="p-2 text-light">${repo.name}</a>
            </div>
            <div class="col-md-6 d-flex flex-row flex-wrap">
              <span class="p-2 text-warning">Stars: ${repo.stargazers_count}</span>
              <span class="p-2 text-warning">Watchers: ${repo.watchers_count}</span>
              <span class="p-2 text-warning">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    document.querySelector('#repos').innerHTML=output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, classes) {
    //Clearing previous alerts
    this.clearAlert();

    const div = document.createElement('div');
    div.className = classes;
    div.appendChild(document.createTextNode(message));

    //Appending the new div to its parent element:
    const container = document.querySelector('#mainContainer');
    container.insertBefore(div, container.childNodes[0]);

    setTimeout(() => {
      this.clearAlert()
    }, 4000)
  }

  clearAlert() {
    const alert = document.querySelector('.alert');

    if (alert) {
      alert.remove();
    }
  }

}