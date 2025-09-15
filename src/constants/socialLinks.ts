import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import { type SvgIconComponent } from "@mui/icons-material";

export const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/anphix/", icon: "LinkedIn" },
  { label: "Instagram", url: "https://www.instagram.com/anphixsolutions/", icon: "Instagram" },
];

export const ICON_MAP: Record<string, SvgIconComponent> = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};