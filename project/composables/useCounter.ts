export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++

  return {
    count: readonly(count),
    increment,
  }
}
