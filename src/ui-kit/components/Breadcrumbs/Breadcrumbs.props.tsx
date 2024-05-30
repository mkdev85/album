export interface BreadcrumbsItemProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbsItemProps[];
}
