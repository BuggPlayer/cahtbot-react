import React, { useContext } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { LangContext } from "../../Context/LangContext";
import { RiErrorWarningLine } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import "./PromoCompo.css";

const PromoCompo = ({ data, userindex }) => {
  // console.log("userindexppppp", userindex);
  // console.log("iteeee,mmm", data);
  const today = Date.now();
  const Time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(today);
  const { language } = useContext(LangContext);

  return (
    <>
      <div
        className={language === "En" ? "containerpromo" : "containerpromoAr"}
      >
        {data
          ? data.list.map((item) => {
              // console.log("item", item);
              return (
                <Paper key={item.id} style={{ marginTop: 10 }} className="couponPaper">
                  <Grid className="couponContainer">
                    <Grid className="badge">
                      <Badge />
                    </Grid>

                    {language === "En" ? (
                      <Grid className="couponHeader">
                        <Grid className="headerText">
                          {userindex === 1 ? (
                            <Typography>20% Off upto 20 SAR</Typography>
                          ) : (
                            <Typography>{item.ruleName_en}</Typography>
                          )}
                        </Grid>

                        <Grid className="couponCode">
                          CODE: {item.couponCode}
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid className="couponHeader">
                        <Grid className="couponCode">
                          CODE: {item.couponCode}
                        </Grid>
                        <Grid className="headerText">
                          <Typography>{item.ruleName_ar}</Typography>
                        </Grid>
                      </Grid>
                    )}

                    {language === "En" ? (
                      <Grid className="couponDesc">
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: item.shortDesc_en,
                          }}
                        />
                      </Grid>
                    ) : (
                      <Grid className="couponDesc">
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: item.shortDesc_ar,
                          }}
                        />
                      </Grid>
                    )}

                    <Grid className="dashedArea">
                      <Grid className="halfCircle"></Grid>

                      <div className="line" />

                      <Grid className="halfCircle"></Grid>
                    </Grid>

                    {language === "En" ? (
                      <Grid className="termsContainer">
                        <Grid
                          className="terms"
                          // onClick={() => navigate("/terms")}
                        >
                          <Grid className="iconArea">
                            <RiErrorWarningLine className="icon" />
                          </Grid>

                          <Typography>Terms & Conditions</Typography>
                        </Grid>

                        <Grid>
                          <Button
                            style={{
                              backgroundColor: "#e4002b",
                              color: "white",
                            }}
                            className="applyButton"
                            // onClick={() => applyCoupon(index, value.maxDiscountAmt)}
                          >
                            Apply
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid className="termsContainer">
                        <Grid>
                          <Button
                            style={{
                              backgroundColor: "#e4002b",
                              color: "white",
                            }}
                            className="applyButton"
                            // onClick={() => applyCoupon(index, value.maxDiscountAmt)}
                          >
                            تطبيق
                          </Button>
                        </Grid>

                        <Grid
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 10,
                          }}
                          className="terms"
                          // onClick={() => navigate("/terms")}
                        >
                          <Typography
                            style={{ fontWeight: "bold", color: "#0099dc" }}
                          >
                            البنود و الظروف
                          </Typography>
                          <Grid
                            style={{
                              marginLeft: 4,
                              marginBottom: 7,
                              color: "#0099dc",
                            }}
                            className="iconArea"
                          >
                            <RiErrorWarningLine className="icon" />
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              );
            })
          : ""}
      </div>
      <p className={language === "En" ? "timepromo" : "timepromoAr"}>{Time}</p>
    </>
  );
};

export default PromoCompo;
