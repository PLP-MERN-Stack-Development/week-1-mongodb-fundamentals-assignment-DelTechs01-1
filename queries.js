// queries.js - MongoDB queries for MongoDB Fundamentals Assignment

// Use the bookstore database
use plp_bookstore;

// 1. Find all books
db.books.find({});

// 2. Find books by George Orwell
db.books.find({ author: "George Orwell" });

// 3. Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } });

// 4. Find all Fiction books
db.books.find({ genre: "Fiction" });

// 5. Find all books that are in stock
db.books.find({ in_stock: true });

// 6. Find books with more than 300 pages
db.books.find({ pages: { $gt: 300 } });

// 7. Find books sorted by price (ascending)
db.books.find().sort({ price: 1 });

// 8. Find the top 3 most expensive books
db.books.find().sort({ price: -1 }).limit(3);

// 9. Project only title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 10. Count how many books are in the collection
db.books.countDocuments();

// 11. Aggregation: Count books by genre
db.books.aggregate([
  { $group: { _id: "$genre", total_books: { $sum: 1 } } }
]);

// 12. Aggregation: Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
]);

// 13. Aggregation: Total pages by author
db.books.aggregate([
  { $group: { _id: "$author", total_pages: { $sum: "$pages" } } }
]);

// 14. Aggregation: List all publishers and the number of books they’ve published
db.books.aggregate([
  { $group: { _id: "$publisher", books_published: { $sum: 1 } } }
]);

// 15. Find all books that are out of stock
db.books.find({ in_stock: false });

// 16. Create an index on the title field
db.books.createIndex({ title: 1 });

// 17. Create a compound index on author and genre
db.books.createIndex({ author: 1, genre: 1 });

// 18. Update a book's price (e.g., update "The Hobbit" price to 16.99)
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 16.99 } }
);

// 19. Delete all books with fewer than 200 pages
db.books.deleteMany({ pages: { $lt: 200 } });

// 20. Add a new book to the collection
db.books.insertOne({
  title: "A Promised Land",
  author: "Barack Obama",
  genre: "Biography",
  published_year: 2020,
  price: 17.99,
  in_stock: true,
  pages: 768,
  publisher: "Crown Publishing Group"
});
