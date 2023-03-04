import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Page2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage('');

    const data = { name, email };
    fetch('https://gorest.co.in/public-api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
        Authorization: "Bearer 6cdb0eb3f389133bfd07d23a39f4157ab9044312a34e08c8a51c0415452745c7"
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          setErrorMessage('Something went wrong. Please try again later.');
          return;
        }
        setIsSuccess(true);
        setName('');
        setEmail('');
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage('Something went wrong. Please try again later.');
        console.error(error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Enter your name and email:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 16, width: 300 }}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 16, width: 300 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handleSubmit} disabled={isLoading} />
      {isLoading && <Text style={{ marginTop: 16 }}>Loading...</Text>}
      {isSuccess && <Text style={{ marginTop: 16 }}>Success!</Text>}
      {errorMessage !== '' && <Text style={{ color: 'red', marginTop: 16 }}>{errorMessage}</Text>}
    </View>
  );
};

export default Page2;
