import React, { useEffect, useState, useMemo } from "react";
import "./css/table.css";
import dogimage from "./Images/buffer.jpg";
import { Container, Card } from "react-bootstrap";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Table = () => {
  const [dogs, setDogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      await fetch("/posts")
        .then((res) => res.json())
        .then((result) => {
          setDogs(result);
          setLoaded(true);
        });
      console.log("dogs", dogs);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getPosts();
  });

  const renderRowSubComponent = (row) => {
    const { name, picLink } = row.original;
    return (
      <div>
        <Card style={{ width: "18rem", margin: "0 auto" }}>
          <Card.Img top src={picLink} alt="Card image cap" />
          <Card.Body>
            <Card.Title>
              <strong>{`${name}`} </strong>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "⬆️️" : "📷"}
          </span>
        ),
      },
      {
        Header: "Breed",
        accessor: "breed",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },

      {
        Header: "Gender",
        accessor: "gender",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Hearts💖",
        accessor: "likes",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
    ]
    // []
  );

  if (loaded) {
    return (
      <div>
        <div className="buttons">
          <Link to="/dogpage">
            <button className="button2" type="button">
              Send a 💖
            </button>
          </Link>
          <Link to="/userprofile">
            <button className="button2" type="button">
              My Account
            </button>
          </Link>
          <form className="form" action="/auth/signout" method="post">
            <input
              className="button"
              type="submit"
              name="signout"
              value="Sign Out"
            />
          </form>
        </div>
        <Container style={{ marginTop: 100 }}>
          <TableContainer
            columns={columns}
            data={dogs}
            renderRowSubComponent={renderRowSubComponent}
          />
        </Container>
      </div>
    );
  } else {
    return (
      <Container>
        <Image
          src={dogimage}
          alt="dog says thank you for waiting as the page loads"
          fluid
        />
      </Container>
    );
  }
};

export default Table;
