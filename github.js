class GitHub {
  constructor() {
    this.id = '0569112ccdd453cb9ff5';
    this.secret = 'f645a5421e65511211e8b42f26089c5c479d3b19';
    this.repos_count = 6;
    this.repos_sort='created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);

    const repositoryResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.id}&client_secret=${this.secret}`);
    
    const profile = await profileResponse.json();
    const repositories = await repositoryResponse.json();

    return {
      profile,
      repositories
    }
  }
}