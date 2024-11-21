import { Card, Container, Flex, Title, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import xampp from '../public/xampp.svg';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const response = await fetch('/api/counter?action=get');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };
    
    fetchCounter();
  }, []);

  const redemption = () => {
    window.location.href = 'https://nextra-five-m.vercel.app/General/Xampp#getting-rid-of-xampp-forever';
  };

  return (
    <Container
      size="sm"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Flex
        align="center"
        direction="column"
        justify="center"
        style={{ textAlign: 'center' }}
      >
        <Card
          padding="lg"
          shadow="sm"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginBottom: '2rem',
          }}
        >
          <img
            src={xampp}
            alt="XAMPP Logo"
            style={{
              width: '15rem',
              height: 'auto',
              maxWidth: '90%',
              marginBottom: '1rem'
            }}
          />
          <Title order={1}>XAMPP the FiveM Server Destroyer</Title>
        </Card>

        <Text size="lg">
          XAMPP has caused significant issues for numerous FiveM servers. Despite being designed primarily for web development projects, server owners continue to rely on this tool for full-scale FiveM server management, pushing it well beyond its intended purpose. This misuse has resulted in widespread performance degradation and instability, as well as substantial data losses that could have been avoided with more robust server management solutions.
        </Text>
        <Text size="lg" style={{ marginTop: '1rem' }}>
          Again and again, people tell server owners to stop using it, prompting even for{' '}
          <a href="https://nextra-five-m.vercel.app/General/Xampp" target="_blank" rel="noopener noreferrer">
            this webpage
          </a>{' '}
          made by{' '}
          <a href="https://github.com/Yorick20022" target="_blank" rel="noopener noreferrer">
            Yorick20022
          </a>.
        </Text>

        <Button onClick={redemption}
          fullWidth
          variant="outline"
          color="blue"
          style={{ margin: '1rem 0' }}
        >
          Redeem yourself
        </Button>

        <Card padding="lg" shadow="sm" style={{ textAlign: 'center', paddingLeft: '4em', paddingRight: '4em' }}>
          <Text size="xl" fw={600}>Current Servers Destroyed: {count}</Text>
          <Text size="md" c="gray">Since 19/11/2024</Text>
          <Text size="sm" c="darkgrey" fs="italic">to the best of our knowledge</Text>
        </Card>
      </Flex>
    </Container>
  );
};

export default App;
