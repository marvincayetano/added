import React, { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

interface FoodAddProps {}

interface FormData {
  firstName: string;
  lastName: string;
}

export function FoodAdd({}: FoodAddProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && (
        <Text style={{ color: "red" }}>This is required.</Text>
      )}

      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Calories per piece</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={styles.label}>per 100G</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Protein per piece</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={styles.label}>per 100G</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Fat per piece</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={styles.label}>per 100G</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Carbs per piece</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={styles.label}>per 100G</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Fiber per piece</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={styles.label}>per 100G</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />
        </View>
      </View>

      <View style={{ marginTop: 26 }}>
        <Button title="Save" onPress={onSubmit} />
        <Button title="Delete" onPress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
  },
  inputContainer: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "100%",
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    padding: 8,
    fontSize: 16,
  },
});
