export interface BreadcrumbsItemProps {
  title: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbsItemProps[];
}
