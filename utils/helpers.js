import SiteConfig from "@config/seo.json";

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

export async function getGithubProfile() {
  const { social } = getSiteMetaData();

  return fetch(`https://api.github.com/users/${social.github}`)
    .then(res => {
      return res.json().then(json => {
        const { avatar_url } = json;
        return avatar_url;
      });
    })
    .catch(err => console.error(err));
}
