export type ColorTypes = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type DataTypes = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ColorTypes[] | ColorTypes;
  support: {
    url: string;
    text: string;
  };
};
