class GitHub {
    constructor() {
        this.client_id = 'ca0da9942eb71f287f08';
        this.client_secret = 'c5583e79ec073ad67bfe49564e9ea5b05fd7f085';
        this.authAddOn= `?client_id=${this.client_id}&client_secret=${this.client_secret}`
        this.repos_count='&per_page=5';
        this.repos_sort='&sort=created:asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}${this.authAddOn}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos${this.authAddOn}&per_page=5`);
        console.log(`https://api.github.com/users/${user}/repos${this.authAddOn}`)
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {profile, repos}
    }
}