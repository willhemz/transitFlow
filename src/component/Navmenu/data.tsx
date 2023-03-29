import { IconType } from 'react-icons/lib/esm/iconBase'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react'

export type ImgType = {
  [index: string]: string
}

type ImgArr = string[]

export type LinkArr = ImgType[]

const ImgObj: ImgType = {
  Logo: '',
  cargo: '',
  IconClock: '',
  IconMail: '',
  IconPhone: '',
}

const imgList: ImgArr = ['Logo', 'cargo', 'IconClock', 'IconMail', 'IconPhone']

export const data: ImgType = imgList.reduce(
  (data, item) => {
    const value = new URL(`../../assets/${item}.png`, import.meta.url).href

    return { ...data, [item]: value }
  },
  { ...ImgObj }
)

export const links: LinkArr = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/' },
  { title: 'Pages', url: '/' },
  { title: 'Project', url: '/' },
  { title: 'Contact', url: '/' },
]

type Socials = {
  url: string
  icon: ReactNode
}[]

export const socials: Socials = [
  { url: 'https://instagram.com', icon: <FaInstagram /> },
  { url: 'https://facebook.com', icon: <FaFacebook /> },
  { url: 'https://twitter.com', icon: <FaTwitter /> },
  { url: 'https://linkedin.com', icon: <FaLinkedin /> },
]
