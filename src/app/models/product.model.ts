/**
 * Represents a single product in the online store.
 */
export interface Product {
  /** Unique product identifier. */
  id: number;
  /** Product name. */
  name: string;
  /** Product price as a display string, e.g. "25,000 UAH". */
  price: string;
  /** Short product description. */
  description: string;
}
