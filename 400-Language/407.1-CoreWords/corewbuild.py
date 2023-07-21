import csv
import ToMiddleChinese

# Function to add a column to a CSV file
def add_tupa_to_csv(input_file, output_file):
    with open(input_file, 'r', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        fieldnames = reader.fieldnames
        if "tupa" in fieldnames:
            return

        rows = []
        for row in reader:
            newdata = ToMiddleChinese.get_tupa_text(row["cmn"])
            row["tupa"] = newdata
            rows.append(row)

        # only after reading and processing the rows!
        # otherwise fieldnames in reader will also be 
        # different from original file
        index_cmn = fieldnames.index("cmn")
        fieldnames.insert(index_cmn + 1, "tupa")

    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

# Example usage
if __name__ == "__main__":
    input_file = "CoreWordsMultilang.csv"
    output_file = "CoreWordsMultilang.csv"

    add_tupa_to_csv(input_file, output_file)
