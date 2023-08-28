import { useMutation } from '@tanstack/react-query'

import apiClient from '../api/apiClient'
import { UserInfo } from '../types/UserInfo'

export const useSigninMutation = () =>
  useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) =>
      (
        await apiClient.post<UserInfo>(`users/signin`, {
          email,
          password
        })
      ).data
  })

export const useSignupMutation = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      password
    }: {
      name: string
      email: string
      password: string
    }) =>
      (
        await apiClient.post<UserInfo>(`users/signup`, {
          name,
          email,
          password
        })
      ).data
  })

export const useUpdateProfileMutation = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      password
    }: {
      name: string
      email: string
      password: string
    }) =>
      (
        await apiClient.put<UserInfo>(`users/profile`, {
          name,
          email,
          password
        })
      ).data
  })
