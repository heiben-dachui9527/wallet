export const mockRouterReplace = jest.fn(() => {})
export const mockRouterPush = jest.fn(() => {})

export const useRouter = jest.fn().mockImplementation(() => ({
  query: 'network=t',
  push: mockRouterPush,
  replace: mockRouterReplace,
  pathname: ''
}))

export default {
  push: mockRouterPush,
  replace: mockRouterReplace
}
