import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Text, Stack, Spinner } from '@chakra-ui/react';
import { useConfirm } from '../../../hooks/confirm';
import { useCommon } from '../../../hooks/common';

export default function App() {
  const { isLoading, setIsError, isError } = useCommon();
  const { confirmMail } = useConfirm();

  const router = useRouter();
  const { token } = router.query;
  const [subtitle, setSubtitle] = useState('Confirmando...');
  useEffect(()=> {
    setIsError(false)

    return () => {
      setSubtitle('Confirmando...');
    }
  },[])

  useEffect(() => {
    
    if (!router.isReady) return;
    !!token && confirmMail(String(token)).then(value => {
      value
        ? setSubtitle('Cadastro ativado com sucesso!')
        : setSubtitle('Falha ao ativar cadastro tente novamente no app!');
    });
  }, [router.isReady]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <Container>
      <Stack align="between">
        <Text fontSize="5xl" align="center" color={isError ? "red":"white"}>
          {subtitle}
        </Text>
        <Image
          src="/images/logo-title-3.png"
          alt="Picture of rose"
          width="350px"
          height="300px"
        />
      </Stack>
    </Container>
  );
}