import { 
  generateProof, 
  Input, 
  verifyProof 
} from "@/libs/circuit";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    (async () => {
      const input: Input = {
        'x': 3,
        'y': 4
      };

      const { proof, publicSignals } = await generateProof(input);

      const isValid = await verifyProof(proof, publicSignals);
      console.log(isValid)
    })();
  }, []);

  return (
    <div className="text-red-500">index test</div>
  )
}

export default index;