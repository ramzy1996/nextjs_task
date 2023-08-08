export const formatDate = (dateString: string | undefined): string => {
    if (!dateString) {
        return "Invalid Date";
    }
    const inputDate = new Date(dateString);
    const options: any = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    return inputDate.toLocaleDateString('en-US', options);
}