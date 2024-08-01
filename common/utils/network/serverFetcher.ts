const baseHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export async function serverFetcher<JSON = any>(
  key: string,
  options?: Readonly<{ arg: RequestInit }>
) {
  const requestHeaders = {
    ...baseHeaders,
    ...options?.arg.headers,
  }
  return fetch(key, {
    ...options?.arg,
    ...(options?.arg?.body ? { body: JSON.stringify(options.arg.body) } : {}),
    headers: requestHeaders,
  }).then(res => res.json())
}
