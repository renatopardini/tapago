// import { Link } from '@chakra-ui/next-js';
import { Box, Button, chakra, Container, Flex, Heading, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Home: NextPage = () => {
  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      [
        "width",
        "height",
        "src",
        "alt",
        "quality",
        "placeholder",
        "blurDataURL",
        "loader ",
      ].includes(prop),
  });

  return(
    <>
      <Head>
        <title>Tá Pago</title>
        <meta name='description' content='...' />
      </Head>

      <Container 
        as='header' 
        maxW='container.xl' 
        py='6' 
        px='6' 
        display='flex' 
        justifyContent='space-between' 
        alignItems='center'
      >
        <NextImage 
          src='/logo-tapago.svg'
          alt='Tá Pago Logo'
          width={198}
          height={60}
          w={{base: '131px', md: '198px'}}
          h={{base: '40px', md: '60px'}}
          priority
        />

        <Button size={{base: 'sm', md: 'md'}} borderRadius='full' bg='white' color='gray.900'>Já tem uma conta?</Button>
      </Container>

      <Container 
        as='main' 
        maxW='container.xl' 
        py={{base: '6', md: '20'}} 
        px='6' 
        display='flex' 
        flexDirection={{base: 'column', md: 'row'}} 
        justifyContent='space-between'
      >
        <Stack spacing={{base: '6', md: '10'}} pr={{base: '0', md: '10'}} alignItems='flex-start'>
          <Heading as='h1' size={{base: 'xl', md: '3xl'}} color='white'>Mantenha a frequência e alcance os seus objetivos</Heading>
          
          <Text size='md'>Nós vamos te ajudar a manter uma rotina consistente para atingir suas metas.</Text>

          <Button as='a' href='#' size='lg' bg='white' color='gray.900'>Cadastre-se agora</Button>

          <Link href='#' _hover={{textDecoration: 'underline'}}>Já tem uma conta? Fazer Login</Link>
        </Stack>

        <NextImage 
          src='/mantenha-a-frequencia-e-alcance-os-seus-objetivos-tapago.svg'
          alt='Mantenha a frequência e alcance os seus objetivos'
          width={530}
          height={450}
          priority
        />
      </Container>

      <Container 
        as='footer' 
        maxW='container.xl' 
        py={{base: '6', md: '12'}} 
        px='6' 
        display='flex' 
        justifyContent='space-between'
      >
        <Stack spacing={{base: '6', md: '12'}} w='100%'>
          <Image 
            src='/logo-tapago-branco.svg'
            alt='Tá Pago Logo'
            width={131}
            height={40}
            priority
          />

          <HStack spacing={{base: '10', md: '20'}}>
            <IconButton aria-label='Facebook Tá Pago' icon={<FaFacebookSquare/>} variant='unstyled' fontSize='2xl'/>
            <IconButton aria-label='Youtube Tá Pago' icon={<FaYoutube/>} variant='unstyled' fontSize='2xl'/>
            <IconButton aria-label='LinkedIn Tá Pago' icon={<FaLinkedin/>} variant='unstyled' fontSize='2xl'/>
            <IconButton aria-label='Instagram Tá Pago' icon={<FaInstagram/>} variant='unstyled' fontSize='2xl'/>
          </HStack>

          <Flex justifyContent={{base: 'flex-start', md: 'space-between'}} direction={{base: 'column', md: 'row'}}>
            <Text>© {new Date().getFullYear()} Pardini Technologies.</Text>

            <Stack spacing='6' direction='row' mt={{base: '6', md: '0'}}>
              <Link>Política de Privacidade</Link>
              <Link>Termos de Uso</Link>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default Home 