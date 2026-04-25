import { IconType } from "react-icons";

import { 
  VscVscode,
  VscAzure,
} from "react-icons/vsc";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiRubyonrails,
  SiPhp,
  SiTailwindcss,
  SiCakephp,
  SiFlask,
  SiPostman,
} from "react-icons/si";

import { 
  FaJava,
  FaPython,
  FaNode,
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaDocker,
  FaJira,
  FaTrello,
} from "react-icons/fa";

import { 
  DiRuby,
  DiMysql,
  DiMongodb,
  DiRedis,
} from "react-icons/di";

import { BiLogoPostgresql } from "react-icons/bi";


import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  rubyonrails: SiRubyonrails,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,

  java: FaJava,
  javascript: SiJavascript,
  python: FaPython,
  ruby: DiRuby,
  php: SiPhp,

  node: FaNode,
  react: FaReact,
  laravel: FaLaravel,
  cakephp: SiCakephp,
  tailwindcss: SiTailwindcss,
  bootstrap: FaBootstrap,
  flask: SiFlask,

  docker: FaDocker,
  postman: SiPostman,
  vscode: VscVscode,
  azure: VscAzure,
  jira: FaJira,
  trello: FaTrello,

  mysql: DiMysql,
  postgresql: BiLogoPostgresql,
  mongo: DiMongodb,
  redis: DiRedis,

};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
