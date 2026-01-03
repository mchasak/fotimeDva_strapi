import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_components_advantages';
  info: {
    displayName: 'Advantage';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_components_blog_posts';
  info: {
    description: '';
    displayName: 'BlogPost';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_components_gallery_images';
  info: {
    description: '';
    displayName: 'Gallery Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    imageSize: Schema.Attribute.Enumeration<['big', 'long', 'tall', 'normal']> &
      Schema.Attribute.DefaultTo<'normal'>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    externalLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsReview extends Struct.ComponentSchema {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    review: Schema.Attribute.Text;
  };
}

export interface ComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    description: '';
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServicePoint extends Struct.ComponentSchema {
  collectionName: 'components_components_service_points';
  info: {
    displayName: 'ServicePoint';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface ComponentsSocials extends Struct.ComponentSchema {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['instagram', 'facebook', 'youtube']>;
    link: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface ComponentsWorkStep extends Struct.ComponentSchema {
  collectionName: 'components_components_work_steps';
  info: {
    description: '';
    displayName: 'ServiceAttribute';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      [
        'calendar',
        'camera',
        'edit',
        'cloud',
        'archive',
        'image',
        'folder',
        'hourglass',
        'people',
        'group',
        'calendar1',
        'compass',
        'map',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_sections';
  info: {
    description: '';
    displayName: 'BlogSection';
  };
  attributes: {
    blog: Schema.Attribute.Component<'components.blog-post', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutContactForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_forms';
  info: {
    description: '';
    displayName: 'Contact Form';
  };
  attributes: {
    socials: Schema.Attribute.Component<'components.socials', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'components.link', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    email: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'components.logo', false>;
    phone: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'components.socials', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    link: Schema.Attribute.Component<'components.link', true>;
    logo: Schema.Attribute.Component<'components.logo', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'components.advantage', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.String;
  };
}

export interface LayoutImageList extends Struct.ComponentSchema {
  collectionName: 'components_layout_image_lists';
  info: {
    displayName: 'Image List';
  };
  attributes: {
    image: Schema.Attribute.Component<'components.gallery-image', true>;
  };
}

export interface LayoutMiniGallery extends Struct.ComponentSchema {
  collectionName: 'components_layout_mini_galleries';
  info: {
    description: '';
    displayName: 'MiniGallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutReviews extends Struct.ComponentSchema {
  collectionName: 'components_layout_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    reviews: Schema.Attribute.Component<'components.review', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_items';
  info: {
    description: '';
    displayName: 'ServiceItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'components.work-step', true>;
    price: Schema.Attribute.Integer;
    reverseOrder: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface LayoutServices extends Struct.ComponentSchema {
  collectionName: 'components_layout_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    service: Schema.Attribute.Component<'components.service', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_text_blocks';
  info: {
    description: '';
    displayName: 'Text Block';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'components.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTextImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_text_images';
  info: {
    description: '';
    displayName: 'Text Image';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files'>;
    reverseOrder: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutWorkPreview extends Struct.ComponentSchema {
  collectionName: 'components_layout_work_previews';
  info: {
    displayName: 'Work Preview';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    link: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutWorkProcess extends Struct.ComponentSchema {
  collectionName: 'components_layout_work_processes';
  info: {
    description: '';
    displayName: 'WorkProcess';
  };
  attributes: {
    step: Schema.Attribute.Component<'components.work-step', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.advantage': ComponentsAdvantage;
      'components.blog-post': ComponentsBlogPost;
      'components.gallery-image': ComponentsGalleryImage;
      'components.link': ComponentsLink;
      'components.logo': ComponentsLogo;
      'components.review': ComponentsReview;
      'components.service': ComponentsService;
      'components.service-point': ComponentsServicePoint;
      'components.socials': ComponentsSocials;
      'components.work-step': ComponentsWorkStep;
      'layout.blog-section': LayoutBlogSection;
      'layout.contact-form': LayoutContactForm;
      'layout.cta': LayoutCta;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.image-list': LayoutImageList;
      'layout.mini-gallery': LayoutMiniGallery;
      'layout.reviews': LayoutReviews;
      'layout.service-item': LayoutServiceItem;
      'layout.services': LayoutServices;
      'layout.text-block': LayoutTextBlock;
      'layout.text-image': LayoutTextImage;
      'layout.work-preview': LayoutWorkPreview;
      'layout.work-process': LayoutWorkProcess;
    }
  }
}
