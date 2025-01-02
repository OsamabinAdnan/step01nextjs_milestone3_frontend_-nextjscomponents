import { Rule as RuleType } from '@sanity/types';

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of Product',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name',
            }
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            title: 'Description of a Product',
            type: 'text'
        },
       
        {
            name: 'price',
            title: 'Price of Product',
            type: 'number'
        },
        {
            name:'price_id',
            title:'Stripe Price ID',
            type:'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                {type: 'category'}
            ]
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'object',
            fields: [
              {
                name: 'average',
                title: 'Average Rating',
                type: 'number',
                description: 'The average rating for the product (out of 5).',
                validation: (Rule:RuleType) => Rule.min(0).max(5),
              },
              {
                name: 'count',
                title: 'Number of Ratings',
                type: 'number',
                description: 'The total number of ratings received.',
                validation: (Rule:RuleType) => Rule.min(0),
              },
            ],
          },
    ]
}