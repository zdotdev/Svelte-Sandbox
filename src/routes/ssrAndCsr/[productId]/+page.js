export const load = async (loadEvent) => {
    const { data } = loadEvent
    return {...data}
}

export const ssr = true // boolean true or false
export const csr = true