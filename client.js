import SanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2023-01-01',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
} 