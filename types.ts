// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  bucket?: string;
  status?: string;
  published_at?: string;
  thumbnail?: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name: string;
    short_description: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    key_features?: string[];
  };
}

// Team member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    job_title: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company?: string;
    job_title?: string;
    testimonial: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Case study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_name: string;
    client: string;
    project_type?: {
      key: string;
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    challenge?: string;
    solution?: string;
    results?: string;
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
  };
}

// Project type literals
export type ProjectType = 'web_dev' | 'branding' | 'marketing' | 'mobile_app' | 'ecommerce';

// Rating literals
export type Rating = '1' | '2' | '3' | '4' | '5';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}