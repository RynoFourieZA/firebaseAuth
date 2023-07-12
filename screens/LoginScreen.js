import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center" behavior="padding">
      <View className="w-[80%]">
        <TextInput 
        placeholder="Email"
        // value={""}
        // onChangeText={(text) => {}}
        
        className="bg-white mt-2 px-4 py-3 rounded-xl"
        />
        <TextInput 
        placeholder="Password"
        // value={""}
        // onChangeText={(text) => {}}
        secureTextEntry
        className="bg-white mt-2 px-4 py-3 rounded-xl"
        />
      </View>
      <View className="w-[60%] justify-center items-center mt-10">
        <TouchableOpacity
        className="bg-[#0782f9] w-full"
        onPress={() => {}}
        >
          <Text>Login</Text>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
      <Text>LoginScreen</Text>
    </KeyboardAvoidingView>
  );
}
