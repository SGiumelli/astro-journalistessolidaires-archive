import Airtable from "airtable";

Airtable.configure({
  apiKey: import.meta.env.AIRTABLE_TOKEN,
});

const base = Airtable.base(import.meta.env.AIRTABLE_BASE);

export async function fetchArticles() {
  return new Promise((resolve, reject) => {
    base("Papiers originaux ou traduits")
      .select({
        // Selecting the first 3 records in SITEWEB - En cours:
        maxRecords: 7,
        view: "SITEWEB - Publications",
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        resolve(records);
      });
  });
}

export async function fetchAllArticles() {
  return new Promise((resolve, reject) => {
      const allRecords = []
    base("Papiers originaux ou traduits")
      .select({
        view: "SITEWEB - Publications",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            //console.log('Retrieved', record.get('Titre'));
                allRecords.push(record)
              //console.log("array", allRecords)
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          //console.log("records", records);
          resolve(allRecords);
        },
      );
  });
}
