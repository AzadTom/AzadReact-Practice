export const sum = (...numbers:number[])=>{

    return numbers.reduce((totalnum,num)=> totalnum+num,0);
}



export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
  
    // Options for a human-readable date format
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  
    // Format the date to a readable format, e.g., "November 10, 2024, 10:00 AM"
    return date.toLocaleDateString("en-US", options);
  }