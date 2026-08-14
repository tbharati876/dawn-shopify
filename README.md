# Shopify Dawn Theme – Troopod Assignment

## Project Overview

This project is a custom Shopify storefront built using the **Shopify Dawn theme** and a Shopify Development Store.

The homepage was implemented based on the provided reference homepage structure and adapted into a functional Shopify store.

The implementation combines custom Shopify theme development with Shopify Admin and Theme Editor configuration.

The custom homepage includes:

- Custom Hero section
- Shop / Product Grid
- Best-selling Combos
- Custom Bundles
- Customer Reviews Rail

## Technologies Used

- Shopify Dawn Theme
- Shopify Liquid
- HTML
- CSS
- JavaScript
- Shopify Products
- Shopify Collections
- Shopify Theme Editor
- Shopify Development Store
- Shopify CLI
- VS Code

# Live Development Store

## Store URL

https://bharathi-troopod-assignment.myshopify.com

## Storefront Password

`STOREFRONT_PASSWORD`

# Homepage Sections

## 1. Custom Hero

A custom Hero section was created using Shopify Liquid.

### Features

- Multiple hero slides
- Images
- Headings
- Descriptions
- Call-to-action buttons
- Navigation dots
- Automatic slide rotation
- Pause behavior on hover and focus
- Reduced-motion support

### Implementation

```text
sections/custom-hero.liquid
```

## 2. Custom Shop 

A custom product grid section was created to display products from a Shopify collection.

### Features

- Shopify collection selection
- Configurable product display
- Product images
- Product titles
- Product prices
- Product links
- Responsive layout

### Implementation

```text
sections/custom-shop.liquid
```

The product information is managed through Shopify Admin rather than being hardcoded into the section.

## 3. Best-selling Combos

A custom Best-selling Combos section was created using Shopify Liquid and Shopify product selectors.

Each combo can contain multiple Shopify products.

### Features

- Select real Shopify products
- Product images
- Product count
- Automatically calculated total price
- Horizontal scrolling
- Add multiple products to cart

### Implementation

```text
sections/custom-combos.liquid
```

The combo button uses custom JavaScript to add the selected Shopify product variants to the cart.

## 4. Custom Bundles

A custom Bundles section was created to group multiple Shopify products together.

### Features

- Multiple bundle blocks
- Product selection from Shopify
- Product images
- Product names
- Automatic product count
- Automatically calculated total price
- Add bundle to cart functionality
- Responsive layout

### Implementation

```text
sections/custom-bundles.liquid
```

## 5. Reviews Rail

A horizontally scrollable customer review section was created.

### Features

- Rating from 1 to 5 stars
- Review text
- Customer name
- Customer location or verification 
- Optional customer image
- Previous and next navigation buttons
- Horizontal scrolling
- Keyboard navigation
- Responsive layout

### Implementation

```text
sections/custom-reviews.liquid
```

# Products

The following products were created in the Shopify Development Store.

| Product | Price |
|---|---:|
| Bamboo Storage Basket | $3.50 |
| Cotton Sweater | $7.00 |
| Foaming Kitchen Cleaner | $3.13 |
| Heavy-Duty Commercial Floor Mat and Front Door Rug – 2 x 6 ft Waterproof, Mud Dirt Trapper with Anti-Slip PVC Backing for Indoor and Outdoor Store Entrances | $4.20 |
| Organic Dishwash Gel | $3.00 |
| Plant-Based Hand Sanitizer | $2.50 |
| Tap Cleaner & Limescale Remover | $2.20 |
| Volt & Vessel Kettle | $9.50 |

All product data was created and configured through Shopify Admin.

# Shopify Configuration

The following items were configured through the Shopify Development Store:

- Product titles
- Product descriptions
- Product images and media
- Product categories
- Product prices in USD
- Inventory
- Product availability
- Shipping information
- Product variants where applicable
- Product metafields
- Collections

The Shopify Theme Editor was used to configure:

- Homepage section order
- Hero content
- Product collection
- Combo products
- Bundle products
- Review content
- Section settings

# Custom Code

The assignment-specific homepage functionality was created using custom Liquid, CSS, and JavaScript.

## Custom Liquid Sections

```text
sections/
├── custom-hero.liquid
├── custom-shop.liquid
├── custom-combos.liquid
├── custom-bundles.liquid
└── custom-reviews.liquid
```

## Custom CSS

```text
assets/custom-sections.css
```

This file contains custom styling for:

- Hero section
- Shop / Product Grid
- Best-selling Combos
- Bundles
- Reviews
- Responsive layouts

The custom styling works together with the existing Shopify Dawn theme.

## Custom JavaScript

```text
assets/custom-sections.js
```

The JavaScript handles:

- Hero slider functionality
- Hero autoplay
- Hero navigation dots
- Reduced-motion preference support
- Add combo to cart
- Add bundle to cart
- Adding multiple product variants to the Shopify cart
- Review rail navigation
- Horizontal scrolling
- Keyboard support

# Project Structure

```text
dawn-shopify/
│
├── assets/
│   ├── custom-sections.css
│   ├── custom-sections.js
│   └── ...
│
├── config/
│   └── ...
│
├── layout/
│   └── ...
│
├── sections/
│   ├── custom-hero.liquid
│   ├── custom-shop.liquid
│   ├── custom-combos.liquid
│   ├── custom-bundles.liquid
│   ├── custom-reviews.liquid
│   └── ...
│
├── snippets/
│   └── ...
│
├── templates/
│   └── ...
│
├── locales/
│   └── ...
│
└── README.md
```

The base theme is Shopify Dawn. The custom sections were added to the Dawn theme specifically for this assignment.

# How the Homepage Was Built

The implementation uses both custom code and Shopify's built-in administration tools.

## Built Through Custom Code

The following functionality was created through custom theme code:

- Custom Hero section
- Custom Shop section
- Best-selling Combos
- Custom Bundles
- Reviews Rail
- Responsive styling
- Hero slider interaction
- Combo add-to-cart functionality
- Bundle add-to-cart functionality
- Review navigation

### Technologies Used for Custom Development

- Shopify Liquid
- HTML
- CSS
- JavaScript

## Configured Through Shopify

The following parts were configured through Shopify Admin and the Theme Editor:

- Products
- Product titles
- Product descriptions
- Product images
- Product prices
- Inventory
- Product categories
- Variants where applicable
- Product metafields
- Collections
- Homepage content
- Hero content
- Product selection for combos
- Product selection for bundles
- Review content
- Homepage section ordering

This approach allows store data to be managed through Shopify Admin while custom functionality remains inside the Dawn theme code.

# Reference Design

The provided homepage reference was used as the structural and visual inspiration for the Shopify implementation.

The homepage structure was adapted into the following Shopify sections:

1. Hero
2. Shop / Product Grid
3. Best-selling Combos
4. Bundles
5. Reviews

The implementation was created as a functional Shopify storefront rather than simply copying static HTML.

Real Shopify products, prices, collections, and Theme Editor settings are used throughout the store.

# Metafields and Metaobjects

Product metafields were configured through Shopify Admin to store additional product-specific information.

The metafield definitions include relevant attributes such as:

- Active ingredient
- Ingredients
- Cleaning surfaces
- Material
- Fabric
- Color
- Usage type
- Suitable space
- Sleeve length type
- Neckline

These metafields allow product-specific information to be managed through Shopify instead of hardcoding all data directly in the theme.

# AI-Assisted Development Workflow

AI assistance was used as a development productivity tool for:

- Planning the custom Shopify section structure
- Generating and refining Liquid section patterns
- Assisting with responsive styling
- Assisting with JavaScript interaction logic
- Reviewing the implementation structure

The generated code was integrated into the Shopify Dawn theme and tested using Shopify CLI, the Shopify Development Store, and the Shopify Theme Editor.

The final homepage was configured and reviewed within the Shopify environment.

# Local Development

## Requirements

- Shopify Development Store
- Shopify CLI
- VS Code or another code editor

## Run the Theme

From the project directory, run:

```bash
shopify theme dev --store bharathi-troopod-assignment.myshopify.com --theme 188551987505
```

Shopify CLI provides links for:

- Local preview
- Shopify preview
- Theme Editor

The theme can then be tested and updated during development.

# Theme

This project is based on the Shopify Dawn theme.

Dawn provides the base Shopify theme structure.

The assignment-specific homepage functionality was implemented through additional custom:

- Liquid sections
- CSS
- JavaScript

# Testing

The completed implementation was reviewed for:

- Homepage rendering
- Hero slider functionality
- Product display
- Product pricing
- Product links
- Combo display
- Combo add-to-cart functionality
- Bundle display
- Bundle add-to-cart functionality
- Review navigation
- Horizontal scrolling
- Desktop responsiveness
- Mobile responsiveness
- Shopify Theme Editor configuration

# Development Store Access

## Development Store URL

https://bharathi-troopod-assignment.myshopify.com

## Storefront Password

`STOREFRONT_PASSWORD`
