# Next.js + Tailwind CSS + Shopify Headless

This creates an e-commerce application with [NextJS](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) using
[Shopify](https://shopify.dev/) as a `headless CMS`.

## Setting up NextJS with Headless Shopify

Make sure you clear the following steps

### On [Shopify](https://shopify.dev/)

- [ ] Create a developer account with Shopify
- [ ] Create a private app to create an API access into your dev store
- [ ] Create a collection and load up some test products
- [ ] Create a private app for the _Storefront API_ and manage its access
- [ ] Grab the following credentials
  - Shopify Sorefront Token
  - Shopify Store Domain

### Locally

- [ ] Clone this repository and run `npm install`
- [ ] Create a file called `.env.local` in the root of the project
- [ ] Create two environment variables

  ```bash
  SHOPIFY_STOREFRONT_ACCESSTOKEN=<Your Access Token>
  SHOPIFY_STORE_DOMAIN=<Your Store Domain>
  ```

- [ ] Change category name on `lib/shopify.js:30` to the category you created
      before
- [ ] run `npm run dev`
