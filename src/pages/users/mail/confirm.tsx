import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Image from 'next/image';
import { Spinner } from '@chakra-ui/react';
import { Text, Stack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { useConfirm } from '../../../hooks/confirm';
import { useCommon } from '../../../hooks/common';

export default function App() {
  const { isLoading } = useCommon();
  const { confirmMail } = useConfirm();
  const router = useRouter();
  const { token } = router.query;
  const [subtitle, setSubtitle] = useState('Confirming...');
  useEffect(() => {
    if (!router.isReady) return;
    confirmMail(token).then(value => {
      value
        ? setSubtitle('Cadastro ativado com sucesso!')
        : setSubtitle('Falha ao ativar cadastro!');
    });
  }, [router.isReady]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <Container>
      <Stack align="between">
        <Text fontSize="6xl" align="center">
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
