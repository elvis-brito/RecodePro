import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Routes from "./src/routers";

export default function App() {
  return (
    <SafeAreaView>
       <Routes />
       <StatusBar style="auto" />
    </SafeAreaView>
  );
}