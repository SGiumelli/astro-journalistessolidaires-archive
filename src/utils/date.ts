export function formatDate(isoDateTime: string) {
    // Given ISO datetime string
    //const isoDateTime = "2021-07-29T18:00:00Z";

// Parse the ISO datetime string into a Date object
    const date = new Date(isoDateTime);

// Create a formatter for the date part in French
    const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

// Create a formatter for the time part in French
    const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

// Format the date and time parts separately
    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);

// Combine date and time parts into the desired format
    const formattedDateTime = `le ${formattedDate} à ${formattedTime}`;

    console.log(formattedDateTime);
// Output: "le 29 juillet 2021 à 18:00"

    return formattedDateTime;

}