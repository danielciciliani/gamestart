import Card from "@/components/Card/Card";
import Form from "@/components/Form/Form";
import Instructions from "@/components/Instructions/Instructions";
import TermsOfService from "@/components/TermsOfService/TermsOfService";

export default function Step1() {
    return (
      <Card
        leftChild={
          <>
          <Instructions></Instructions>
          <TermsOfService></TermsOfService>
          </>
        }
        rightChild={
          <Form></Form>
        }
        >
      </Card>
  );
}

