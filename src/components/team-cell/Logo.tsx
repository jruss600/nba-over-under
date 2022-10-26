interface ILogo {
  logo: string
}

const Logo = ({ logo }: ILogo) => {
  return <img src={logo} height={'24px'} width={'24px'} />
}

export { Logo }
