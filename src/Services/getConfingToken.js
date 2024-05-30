
export const getConfingToken = () => {
    return {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}
}
