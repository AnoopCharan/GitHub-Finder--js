class UI {
    constructor() {
        this.profile = document.querySelector('#profile');

    }

    showProfile(user) {
        this.profile.innerHTML = `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src=${user.avatar_url} alt="">
                            <a href="${user.html_url}" target="_blank", class="btn btn-primary btn-block">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="badge bg-primary">
                                Public Repos : ${user.public_repos}
                            </span>
                            <span class="badge bg-secondary">
                                Public Gists : ${user.public_gists}
                            </span>
                            <span class="badge bg-success">
                                Followers : ${user.public_followers}
                            </span>
                            <span class="badge bg-info">
                                Following : ${user.public_following}
                            </span>
                            <br><br>

                            <ul class='list=group'>
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/blog : ${user.blog}</li>
                                <li class="list-group-item">Location : ${user.location}</li>
                                <li class="list-group-item">Member Since : ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 class="page-heading mb-3">Latest Repos</h3>
                <div class="repos"></div>
                `;
    }

    showRepos(repos) {
        // console.log(typeof repos);
        let output ='';

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>

                    <div class="col-md-6">
                        <span class="badge bg-primary"> Stars: ${repo.stargazers_count}</span>
                    </div>

                </div>
            </div>
            `
        });

        document.querySelector('.repos').innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML ='';
    }

    showAlert(msg, css) {
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        div.className = css;
        // add text
        div.appendChild(document.createTextNode(msg));
        // get parent
        const container = document.querySelector('.searchContainer')
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        },3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}