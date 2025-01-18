// src/lib/sanity.ts
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "i8snfskn", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});
// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
export function urlFor(source: any) {
  return builder.image(source);
}
