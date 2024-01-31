export type Iexperiences = {
  id: number;
  company: string;
  title: string;
  location: string;
  description: string;
  logo_url?: string;
  type: string;
  skills: string[];
  start_date: string;
  end_date: string;
  website: string;
};

export type Ieducation = {
  id: number;
  school: string;
  field: string;
  degree: string;
  start_year: string;
  end_year: string;
  location: string;
};

export type Ivolunteer = {
  id: number;
  organisation: string;
  role: string;
  start_date: string;
  end_date: string;
  field: string;
  website: string;
};

export type Ilanguages = {
  id: number;
  language: string;
  level: string;
};
