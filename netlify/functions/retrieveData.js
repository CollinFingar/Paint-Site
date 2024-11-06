export default async () => {
    const apiKey = Netlify.env.get("REACT_APP_ACCESS_TOKEN");
    
    const response = await fetch(`https://cdn.contentful.com/spaces/cj6ju1ololnf/environments/master/entries?access_token=${apiKey}`);
    const data = await response.json();

    return new Response(JSON.stringify(data));
};
